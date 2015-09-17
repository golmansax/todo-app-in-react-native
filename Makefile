.PHONY: travis-lint eslint link-modules

travis-lint:
	./node_modules/.bin/travis-lint .travis.yml

eslint:
	./node_modules/.bin/eslint .

link-modules:
	cd ios/ && ln -f -s ../node_modules .
