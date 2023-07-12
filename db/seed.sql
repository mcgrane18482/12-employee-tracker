INSERT INTO departments (name)
VALUES
  ('Human Resources'),
  ('Finance'),
  ('Marketing'),
  ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Recruiter', 56000, 1),
  ('Trainer', 50000, 1),
  ('Accountant', 60000, 2),
  ('Payroll Specialist', 54000, 2),
  ('Marketing Coordinator', 65000, 3),
  ('Sales Representative', 62000, 4),
  ('Social Media Manager', 56000, 3),
  ('Event Coordinator', 60000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Samuel', 'Richards', 1, NULL),
    ('Amanda', 'Jackson', 2, 1),
    ('Cameron', 'Tofeld', 3, NULL),
    ('Maria', 'Estrada', 4, 2);