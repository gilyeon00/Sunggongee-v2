FROM python:3.8.5

WORKDIR /backend

COPY requirements.txt /backend/ 

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD python manage.py runserver --noreload
    
COPY . /backend/