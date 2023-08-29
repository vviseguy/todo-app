/* eslint-disable react/prop-types */
import styles from './tasks.module.css';
import { Task } from '../task';

export function Tasks({ tasks, onComplete }) {

    const tasksQuantity = tasks.length
    const completedTask = tasks.filter(task => task.isCompleted).length
    console.log(tasks);
    console.log(tasks.filter(task => task.iscompleted).length);
    console.log(completedTask);

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Created Task</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className={styles.completed}>Completed Tasks</p>
                    <span>{completedTask} of {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete} />
                ))}
            </div>
        </section>
    )
}