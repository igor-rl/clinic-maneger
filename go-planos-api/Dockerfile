# Etapa de construção
FROM golang:1.18

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

RUN apt-get update && apt-get install sqlite3
RUN go install github.com/spf13/cobra/cobra@v1.1.1
RUN go install github.com/golang/mock/mockgen@latest

CMD ["tail", "-f", "/dev/null"]
