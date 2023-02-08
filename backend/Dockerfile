FROM python:3.8.5

WORKDIR /backend

COPY requirements.txt /backend/ 

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT ["dockerize", "-wait", "tcp://mysqlDB:3306", "-timeout", "20s"]

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN apt-get install -y libmysqlclient-dev=5.7.31-0ubuntu0.18.04.1
RUN pip3 install mysqlclient

CMD python manage.py runserver --noreload
    
COPY . /backend/