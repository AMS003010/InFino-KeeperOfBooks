FROM python:3 AS builder

WORKDIR /app

COPY ./requirements.txt .

RUN pip install --user -r requirements.txt

FROM python:3-slim

WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV MONGO_URI=mongodb+srv://ams:juiceBox@cluster1.wgncmcb.mongodb.net/?retryWrites=true&w=majority

COPY --from=builder /root/.local /root/.local

COPY . .

ENV PATH=/root/.local/bin:$PATH

EXPOSE 5000

CMD [ "flask","run","--host=0.0.0.0" ]