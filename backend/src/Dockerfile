# Pull base image
FROM python:3.10

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN useradd -ms /bin/bash vscode
RUN echo "vscode ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
    && chmod +x wait-for-it.sh \
    && mv wait-for-it.sh /usr/wait-for-it.sh

# Set work directory
WORKDIR /app/src

USER vscode
# Install dependencies
COPY requirements.txt /app/src/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/src/
