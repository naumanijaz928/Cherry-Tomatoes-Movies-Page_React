.PHONY: test coverage

deps:
	docker-compose run -v "${PWD}:/opt/app" node yarn install

down:
	docker-compose down

up: deps
	docker-compose up -d app

test: deps
	docker-compose run -v "${PWD}:/opt/app" -e CI=true node yarn test

coverage: deps
	docker-compose run -v "${PWD}:/opt/app" -e CI=true node yarn coverage
