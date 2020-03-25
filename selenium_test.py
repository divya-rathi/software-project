from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium import webdriver
import unittest
import os


class TestSelenium(unittest.TestCase):

    def setUp(self):
        # default group to test
        self.default_group = 'GRUPO RESOCIE'

        # chromedriver binary
        driver_path = os.getcwd() + '/chromedriver.exe'
        profile_path = os.getcwd() + '/profile/'

        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument(f'--user-data-dir={profile_path}')

        # create the fake browser
        self.driver = webdriver.Chrome(executable_path=driver_path, options=chrome_options)

        self.wait = WebDriverWait(self.driver, 15)
        # get request using the fake browser
        self.driver.get('https://pro-deploy-123.netlify.com/login')
        xpath_home = "//*[contains(text(), 'Mantenha seu telefone conectado')]"
        self.wait_for_element(xpath_home)
    def wait_for_element(self, name):
        return self.wait.until(EC.visibility_of_element_located((By.XPATH,
                                                                    name)))

    def test_click_on_default_group(self):
        xpath_group = f'//*[@title="{self.default_group}"]'
        self.wait_for_element(xpath_group)

        group = self.driver.find_element_by_xpath(xpath_group)
        group.click()

        groups = self.driver.find_elements_by_xpath(xpath_group)

        self.assertEqual(2, len(groups))

if __name__ == '__main__':
    print("hi")
    unittest.main()