from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from base import get_driver

driver = get_driver()
wait = WebDriverWait(driver, 20)

# 1️⃣ Open login page
driver.get("http://localhost:5173/auth")

# 2️⃣ LOGIN
email_input = wait.until(
    EC.visibility_of_element_located((By.NAME, "email"))
)
email_input.clear()
email_input.send_keys("rahulrajdec65@gmail.com")

password_input = wait.until(
    EC.visibility_of_element_located((By.NAME, "password"))
)
password_input.clear()
password_input.send_keys("R@hulR@j")

login_button = wait.until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, "button[type='submit']"))
)
login_button.click()

# 3️⃣ WAIT FOR DASHBOARD (QOTD section)
wait.until(
    EC.visibility_of_element_located(
        (By.XPATH, "//h2[contains(text(),'Question of the Day')]")
    )
)

# 4️⃣ WAIT UNTIL REAL QUESTION TITLE LOADS (not skeleton)
def question_loaded(driver):
    el = driver.find_element(
        By.XPATH,
        "//h2[contains(text(),'Question of the Day')]/following::p[1]"
    )
    text = el.text.strip()
    if text and "Loading" not in text:
        return el
    return False

question_title_el = wait.until(question_loaded)

# 5️⃣ VERIFY QUESTION TITLE
assert question_title_el.text.strip() != ""
print("📌 Question Title:", question_title_el.text)

# 6️⃣ VERIFY CODEFORCES LINK (Solve Now button)
solve_now_btn = wait.until(
    EC.element_to_be_clickable(
        (By.XPATH, "//a[contains(text(),'Solve Now')]")
    )
)

href = solve_now_btn.get_attribute("href")
assert "codeforces.com" in href

print("🔗 Problem Link:", href)
print("✅ QOTD Visibility Test Passed")

driver.quit()
