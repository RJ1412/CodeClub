from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from base import get_driver

driver = get_driver()
wait = WebDriverWait(driver, 30)

# 1️⃣ Open login page
driver.get("http://localhost:5173/auth")

# 2️⃣ LOGIN
wait.until(EC.visibility_of_element_located((By.NAME, "email"))).send_keys(
    "rahulrajdec65@gmail.com"
)
wait.until(EC.visibility_of_element_located((By.NAME, "password"))).send_keys(
    "R@hulR@j"
)
wait.until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']"))
).click()

# 3️⃣ Wait for dashboard
wait.until(EC.url_contains("/dashboard"))
print("✅ Login successful, dashboard loaded")

# 4️⃣ Wait for leaderboard table header "User | Points"
wait.until(
    EC.visibility_of_element_located(
        (By.XPATH, "//th[contains(text(),'User') and following-sibling::th[contains(text(),'Points')]]")
    )
)

# 5️⃣ Get ONLY leaderboard rows (correct table)
leaderboard_rows = wait.until(
    EC.presence_of_all_elements_located(
        (
            By.XPATH,
            "//th[contains(text(),'User')]/ancestor::table/tbody/tr"
        )
    )
)

# 6️⃣ Assertions
assert len(leaderboard_rows) > 0

print(f"✅ Leaderboard Test Passed ({len(leaderboard_rows)} row(s) found)")

# 7️⃣ Extract users & scores
scores = []
for row in leaderboard_rows:
    cols = row.find_elements(By.TAG_NAME, "td")
    user = cols[0].text.strip()
    score = int(cols[1].text.strip())
    scores.append(score)
    print(f"👤 User: {user} | ⭐ Points: {score}")

# 8️⃣ Verify ranking order
assert scores == sorted(scores, reverse=True), "Leaderboard ranking incorrect"

print("🏆 Leaderboard ranking verified successfully")

driver.quit()
