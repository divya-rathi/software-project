import unittest
from selenium import webdriver
from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support import expected_conditions as expected
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
import os
DRIVER = os.getenv('DRIVER', 'headless_chrome')
BASE_URL = os.getenv('BASE_URL', 'https://pro-deploy-123.netlify.com/login')
SELENIUM = os.getenv('SELENIUM', 'http://localhost:4444/wd/hub')

def get_headless_chrome():
    options = Options()
    options.add_argument('-headless')
    options.headless=True
    driver_path = os.getcwd() + '/geckodriver'
    binary_path = os.getcwd() + '/firefox/firefox'
    binary = FirefoxBinary(binary_path)
    browser = Firefox(executable_path=driver_path,firefox_options=options,firefox_binary=binary)
    # Desktop size
    browser.set_window_position(0, 0)
    browser.set_window_size(1366, 768)

    return browser


DRIVERS = {
    'headless_chrome': get_headless_chrome
}

def get_browser_driver():
    return DRIVERS.get(DRIVER)()