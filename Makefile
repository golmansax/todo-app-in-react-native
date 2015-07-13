.PHONY: travis-lint jscs

travis-lint:
	./node_modules/.bin/travis-lint .travis.yml

jscs:
	./node_modules/.bin/jscs . --esprima=esprima-fb
