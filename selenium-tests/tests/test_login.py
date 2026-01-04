from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Setup driver
driver = webdriver.Chrome(
    service=Service(ChromeDriverManager().install())
)
driver.maximize_window()

# Open login page
driver.get("http://localhost:5173/auth")  # home page = login

wait = WebDriverWait(driver, 15)

# ---- EMAIL INPUT ----
email_input = wait.until(
    EC.presence_of_element_located((By.NAME, "email"))
)
email_input.clear()
email_input.send_keys("rahulrajdec65@gmail.com")

# ---- PASSWORD INPUT ----
password_input = wait.until(
    EC.presence_of_element_located((By.NAME, "password"))
)
password_input.clear()
password_input.send_keys("R@hulR@j")

# ---- LOGIN BUTTON ----
login_button = wait.until(
    EC.element_to_be_clickable(
        (By.CSS_SELECTOR, "button[type='submit']")
    )
)
login_button.click()

# ---- VERIFY DASHBOARD REDIRECT ----
wait.until(EC.url_contains("/dashboard"))

print("✅ LOGIN TEST PASSED")

driver.quit()
