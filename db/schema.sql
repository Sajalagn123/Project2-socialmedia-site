DROP DATABASE IF EXISTS crowdfund_db;
CREATE DATABASE crowdfund_db;
USE crowdfund_db;
/**Create user account table to represent
 the participants' account in the crowd funding project*/
CREATE TABLE country (
  country_id int NOT NULL,
  country_name varchar(80),
  PRIMARY KEY (country_id)
);
CREATE TABLE user_account (
  user_id int NOT NULL auto_increment,
  last_name varchar(64),
  first_name varchar(64),
  user_name varchar(128) NOT NULL,
  password varchar(255),
  email varchar(120),
  projects_supported int,
  total_amount decimal(12, 2),
  country_id int,
  PRIMARY KEY (user_id),
  FOREIGN KEY (country_id) REFERENCES country(country_id)
);
/**Create country table and reference country_id after 
 the table is created*/
CREATE TABLE organization (
  organization_id int NOT NULL,
  organization_name varchar(255),
  details varchar(255),
  PRIMARY KEY (organization_id)
);
CREATE TABLE participant (
  participant_id int NOT NULL auto_increment,
  first_name varchar(64),
  last_name varchar(64),
  title varchar(64),
  description varchar(255),
  user_account_id int,
  FOREIGN KEY(user_account_id) REFERENCES user_account (user_id),
  participated_in int,
  PRIMARY KEY(participant_id)
);
/**Create the organization table, then alter the 
 participant table to create a foreign key for organization_id*/
CREATE TABLE project_team (
  project_team_id int NOT NULL,
  PRIMARY KEY(project_team_id),
  participant_responsibilities varchar(255)
);
CREATE TABLE roles (
  role_id int NOT NULL,
  PRIMARY KEY (role_id),
  role_name varchar(64)
);
CREATE TABLE project (
  project_id int NOT NULL,
  project_name varchar(255),
  organization_id int,
  FOREIGN KEY (organization_id) REFERENCES organization(organization_id),
  PRIMARY KEY(project_id),
  project_description text,
  project_location text,
  start_date date,
  end_date date,
  goal decimal(12, 2),
  pledged decimal(12, 2),
  investors int
);
-- CREATE TABLE project_status (
--   project_status_id int NOT NULL,
--   status_name varchar(64),
--   PRIMARY KEY(project_status_id)
-- );
-- ALTER TABLE project
-- ADD FOREIGN KEY(project_status_id) REFERENCES project_status(project_status_id);
-- CREATE TABLE project_status_history (
--   project_status_history_id int NOT NULL,
--   FOREIGN KEY(project_id) REFERENCES project(project_id),
--   FOREIGN KEY(project_status_id) REFERENCES project_status(project_status_history_id),
--   time_stamp timestamp,
--   PRIMARY KEY(project_status_history_id)
-- );
-- CREATE TABLE parameters(
--   parameters_id int NOT NULL,
--   FOREIGN KEY(project_id) REFERENCES project(project_id),
--   end_date date,
--   goal decimal(12, 2),
--   time_stamp timestamp,
--   PRIMARY KEY(parameters_id)
-- );
-- CREATE TABLE user_account (
--   user_account_id int NOT NULL,
--   first_name varchar(64),
--   last_name varchar(64),
--   user_name varchar(128),
--   password varchar(255),
--   email varchar(128),
--   projects_supported int,
--   total_amount decimal(12, 2),
--   FOREIGN KEY(country_id) REFERENCES country(country_id),
--   PRIMARY KEY(user_account_id)
-- );
CREATE TABLE comment(
  comment_id int NOT NULL,
  project_id int,
  user_account_id int,
  FOREIGN KEY(project_id) REFERENCES project(project_id),
  FOREIGN KEY(user_account_id) REFERENCES user_account (user_id),
  time_stamp timestamp,
  PRIMARY KEY(comment_id)
);
CREATE TABLE updates (
  updates_id int NOT NULL,
  project_id int,
  user_account_id int,
  FOREIGN KEY(project_id) REFERENCES project(project_id),
  FOREIGN KEY(user_account_id) REFERENCES user_account(user_id),
  update_text text,
  time_stamp timestamp,
  PRIMARY KEY(updates_id)
);
CREATE TABLE material_type(
  material_type_id int NOT NULL,
  type_name varchar(32),
  PRIMARY KEY(material_type_id)
);
CREATE TABLE material(
  material_id int NOT NULL,
  project_id int,
  material_type_id int,
  FOREIGN KEY(project_id) REFERENCES project(project_id),
  FOREIGN KEY(material_type_id) REFERENCES material_type(material_type_id),
  material_description text,
  link text,
  PRIMARY KEY(material_id)
);
CREATE TABLE investment_option_catalog(
  investment_option_catalog_id int NOT NULL,
  option_name varchar(255),
  funds_min decimal(12, 2),
  funds_max decimal(12, 2),
  PRIMARY KEY(investment_option_catalog_id)
);
CREATE TABLE project_investment_option(
  project_investment_option_id int NOT NULL,
  project_id int,
  investment_option_catalog_id int,
  FOREIGN KEY(project_id) REFERENCES project(project_id),
  FOREIGN KEY(investment_option_catalog_id) REFERENCES investment_option_catalog(investment_option_catalog_id),
  option_name varchar(255),
  option_description text,
  PRIMARY KEY(project_investment_option_id)
);
CREATE TABLE project_investor(
  project_investor_id int NOT NULL,
  project_id int,
  user_account_id int,
  project_investment_option_id int,
  FOREIGN KEY(project_id) REFERENCES project(project_id),
  FOREIGN KEY(user_account_id) REFERENCES user_account(user_id),
  FOREIGN KEY(project_investment_option_id) REFERENCES project_investment_option(project_investment_option_id),
  pledged decimal(12, 2),
  time_stamp timestamp,
  PRIMARY KEY(project_investor_id)
);
INSERT INTO country (country_id, country_name)
VALUES (1, 'United States'),
  (2, 'Singapore'),
  (3, 'United Kingdom'),
  (4, 'Hong Kong');
INSERT INTO user_account (
    last_name,
    first_name,
    user_name,
    password,
    email,
    projects_supported,
    total_amount,
    country_id
  )
VALUES (
    'Doe',
    'John',
    'JDoe',
    'Easypassword123',
    'someemail@yahoo.com',
    '0',
    0.00,
    1
  ),
  (
    'Coffee',
    'Guy',
    'GCoffee',
    'Ilovecoffee789',
    'someotheremail@yahoo.com',
    '1',
    90.00,
    1
  ),
  (
    'Stein',
    'Ben',
    'BStein',
    'ferrisbuehler11',
    'otheremailsome@yahoo.com',
    '2',
    180.00,
    2
  ),
  (
    'Mizanin',
    'Mike',
    'MMizanin',
    'iamAWESOME',
    'sameotheremail@yahoo.com',
    '2',
    180.00,
    1
  );
-- INSERT INTO project_team (project_team_id, project_id, role_id, participant_id, participant_responsibilities)
-- VALUES()