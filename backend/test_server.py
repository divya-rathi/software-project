import unittest
from backend import app

class Test(unittest.TestCase):
  def test(self):
    result = app.test_client().get('/api')

    self.assertEqual(result.data.decode('utf-8'), 'Hello people!')