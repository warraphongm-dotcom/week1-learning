const fs = require('fs');

// ── Step 1: รับ username ──
const username = process.argv[2];

if (!username) {
    console.log("Usage: node github-stats.js <username>");
    process.exit(1);
}

// ── Step 2: function ดึงข้อมูล ──
async function fetchRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?per_page=100`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
}

// ── Step 3: function วิเคราะห์ ──
function analyzeRepos(repos) {
    let totalStars = 0;
    let mostStarred = null;
    const languages = {};

    // วน repos
    for (const repo of repos) {
        totalStars += repo.stargazers_count;

        if (!mostStarred || repo.stargazers_count > mostStarred.stargazers_count) {
            mostStarred = repo;
        }

        const lang = repo.language;
        if (lang) {
            languages[lang] = (languages[lang] || 0) + 1;
        }
    }   // ← ปิด for แรก

    // หา top language
    let topLanguage = null;
    let topCount = 0;

    for (const [lang, count] of Object.entries(languages)) {
        if (count > topCount) {
            topLanguage = lang;
            topCount = count;
        }
    }   // ← ปิด for ที่สอง

    // return หลัง for ทั้งหมดจบ
    return { totalStars, mostStarred, topLanguage, languages };
}

// ── Step 4: function บันทึกไฟล์ ──
function saveReport(username, report) {
    const filename = `report-${username}.json`;
    fs.writeFileSync(filename, JSON.stringify(report, null, 2));
    console.log(`✓ บันทึกแล้ว: ${filename}`);
}

// ── Step 5: main ──
async function main() {
    try {
        console.log(`กำลังดึงข้อมูล ${username}...`);
        const repos = await fetchRepos(username);
        
        const report = analyzeRepos(repos);
        report.username = username;
        report.generatedAt = new Date().toISOString();
        
        console.log("\n── Report ──");
        console.log(JSON.stringify(report, null, 2));
        
        saveReport(username, report);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

main();