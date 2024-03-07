# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Task Scheduler

Task Scheduler is a simple JavaScript package that allows you to schedule tasks to run after a specified delay. It provides an easy-to-use interface for scheduling tasks and managing them within your Node.js applications.

## Installation

You can install Task Scheduler via npm:

```bash
npm install task-scheduler
```

## Usage

```javascript
const TaskScheduler = require('task-scheduler');

// Create a new instance of TaskScheduler
const taskScheduler = new TaskScheduler();

// Define tasks
const task1 = () => console.log('Task 1 executed!');
const task2 = () => console.log('Task 2 executed!');
const task3 = () => console.log('Task 3 executed!');

// Schedule tasks with delays
const taskId1 = taskScheduler.scheduleTask(task1, 3000); // Execute task1 after 3 seconds
const taskId2 = taskScheduler.scheduleTask(task2, 5000); // Execute task2 after 5 seconds
const taskId3 = taskScheduler.scheduleTask(task3, 7000); // Execute task3 after 7 seconds

// Cancel a task
setTimeout(() => {
  taskScheduler.cancelTask(taskId2); // Cancel task2
}, 4000);
```

## API

### `new TaskScheduler()`

Creates a new instance of TaskScheduler.

### `scheduleTask(task, delay)`

Schedules a task to run after the specified delay.

- `task`: The function to be executed.
- `delay`: The delay in milliseconds before the task should be executed.

Returns the ID of the scheduled task.

### `cancelTask(taskId)`

Cancels the task with the specified ID.

- `taskId`: The ID of the task to cancel.

### `getTasks()`

Returns an array of objects representing the currently scheduled tasks, each containing the task ID and its start time.

### `start()`

Starts the task scheduler. Automatically called when scheduling the first task.

### `stop()`

Stops the task scheduler. Automatically called when there are no more scheduled tasks.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
