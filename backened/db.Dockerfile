FROM postgres:13

ENV POSTGRES_DB=db
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=admin

EXPOSE 5432