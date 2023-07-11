INSERT INTO departments (id, name)
VALUES
  (1, 'Human Resources'),
  (2, 'Finance'),
  (3, 'Marketing'),
  (4, 'Sales');

INSERT INTO roles (id, title, salary, department_id)
VALUES
  (1, 'Recruiter', 56,000.00, 1),
  (2, 'Trainer', 50,000.00, 1),
  (3, 'Accountant', 60,000.00, 2),
  (4, 'Payroll Specialist', 54,000.00, 2),
  (5, 'Marketing Coordinator', 65,000.00, 3)
  (6, 'Sales Representative', 62,000.00, 4)
  (7, 'Social Media Manager', 56,000.00, 3)
  (8, 'Event Coordinator', 60,000.00, 3);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES
    (5454, 'Samuel', 'Richards', 1, 1),
    (6327, 'Amanda', 'Jackson', 2, 1),
    (9826, 'Nicole', 'Tofeld', 3, 2),
    (4044, 'Maria', 'Estrada', 4, 2);