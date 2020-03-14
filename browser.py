import os
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options 
DRIVER = os.getenv('DRIVER', 'headless_chrome')
BASE_URL = os.getenv('BASE_URL', 'http://backend:3000')
SELENIUM = os.getenv('SELENIUM', 'http://localhost:4444/wd/hub')


def get_chrome_driver():
    desired_capabilities = webdriver.DesiredCapabilities.CHROME
    desired_capabilities['loggingPrefs'] = {'browser': 'ALL'}
    chromedriver = "./chromedriver.exe"
    os.environ["webdriver.chrome.driver"] = chromedriver
    chrome_options = Options()  
    chrome_options.add_argument("--headless") 
    chromedriver_path = helper.find_executable('chromedriver')
    chrome_options.binary_location = webdriver.Chrome(chromedriver_path, chrome_options=options)
    desired_capabilities.update(chrome_options.to_capabilities())

    browser = webdriver.Chrome(
        executable_path=os.path.abspath("./chromedriver.exe"),
        desired_capabilities=desired_capabilities,
        chrome_options=chrome_options)

    # Desktop size
    browser.set_window_position(0, 0)
    browser.set_window_size(1366, 768)

    return browser


def get_headless_chrome():
    desired_capabilities = webdriver.DesiredCapabilities.CHROME
    desired_capabilities['loggingPrefs'] = {'browser': 'ALL'}

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--user-data-dir=/tmp/browserdata/chrome  --disable-plugins --disable-instant-extended-api   --headless")

    desired_capabilities.update(chrome_options.to_capabilities())

    browser = webdriver.Remote(command_executor=SELENIUM,capabilities=desired_capabilities)

    # Desktop size
    browser.set_window_position(0, 0)
    browser.set_window_size(1366, 768)

    return browser


DRIVERS = {
    'chrome': get_chrome_driver,
    'headless_chrome': get_headless_chrome
}

def get_browser_driver():
    return DRIVERS.get(DRIVER)()