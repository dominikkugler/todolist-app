package com.dominikkugler.todolist_backend.repository;

import com.dominikkugler.todolist_backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
