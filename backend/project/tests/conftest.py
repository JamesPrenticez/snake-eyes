import pytest
from project import create_app

@pytest.fixture(scope='session')
def app():
	"""
		Setup our flask test app, this only gets executed once.
	"""
	params = {
		'DEBUG': False,
	}

	_app = create_app(config_env="testing", settings_override=params)

	# Establish an application context before running the tests.
	ctx = _app.app_context()
	ctx.push()

	yield _app

	ctx.pop()


@pytest.fixture(scope='function')
def client(app):
	"""
	Setup an app client, this gets executed for each test function.

	:param app: Pytest fixture
	:return: Flask app client
	"""
	yield app.test_client()
