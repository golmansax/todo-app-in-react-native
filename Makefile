.PHONY: travis-lint eslint

travis-lint:
	./node_modules/.bin/travis-lint .travis.yml

eslint:
	./node_modules/.bin/eslint . --ext .js --ext .jsx
