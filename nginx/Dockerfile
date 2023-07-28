FROM nginx:1.21.6

RUN openssl req -x509 -nodes -days 365 \
  -subj  "/C=CA/ST=QC/O=Company Inc/CN=www.app.com" \
  -newkey rsa:2048 -keyout /etc/ssl/private/app.key \
  -out /etc/ssl/certs/app.crt;

RUN openssl req -x509 -nodes -days 365 \
  -subj  "/C=CA/ST=QC/O=Company Inc/CN=www.idp.com" \
  -newkey rsa:2048 -keyout /etc/ssl/private/idp.key \
  -out /etc/ssl/certs/idp.crt;

RUN openssl req -x509 -nodes -days 365 \
  -subj  "/C=CA/ST=QC/O=Company Inc/CN=app.backend.com" \
  -newkey rsa:2048 -keyout /etc/ssl/private/app_backend.key \
  -out /etc/ssl/certs/app_backend.crt;

RUN openssl req -x509 -nodes -days 365 \
  -subj  "/C=CA/ST=QC/O=Company Inc/CN=idp.backend.com" \
  -newkey rsa:2048 -keyout /etc/ssl/private/idp_backend.key \
  -out /etc/ssl/certs/idp_backend.crt;
