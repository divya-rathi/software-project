from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium import webdriver
from bs4 import BeautifulSoup
import unittest
import time
import os


class TestSelenium(unittest.TestCase):

    def setUp(self):
        # default group to test
        self.default_group = 'GRUPO RESOCIE'

        # chromedriver binary
        driver_path = os.getcwd() + '/chromedriver'
        profile_path = os.getcwd() + '/profile/'

        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument(f'--user-data-dir={profile_path}')

        # create the fake browser
        self.driver = webdriver.Chrome(driver_path, options=chrome_options)

        self.wait = WebDriverWait(self.driver, 15)
        # get request using the fake browser
        self.driver.get('https://pro-deploy-123.netlify.com/login')
        xpath_home = "//*[contains(text(), 'Mantenha seu telefone conectado')]"
        self.wait_for_element(xpath_home)
    def test_checklogin_box(self):
        print("validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = "chocolate"
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
if __name__ == '__main__':
    print("hi")
    unittest.main()