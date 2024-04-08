FROM python:3

WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV MONGO_URI=mongodb+srv://ams:juiceBox@cluster1.wgncmcb.mongodb.net/?retryWrites=true&w=majority

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]