import ITaskPackage from '../interfaces/ITaskPackage';
import Tasks from '../database/models/Task';

export default class TaskService {
  taskModel = Tasks;

  async getAll(): Promise<Tasks[]> {
    const result: Tasks[] = await this.taskModel.findAll();

    return result;
  }

  async create(taskData: {}): Promise<Tasks> {
    const created: Tasks = await this.taskModel.create(taskData);

    return created;
  }

  async edit(id: number, taskData: ITaskPackage): Promise<void> {
    await this.taskModel.update(taskData, { where: { taskId: id } });
  }

  async delete(id: number): Promise<void> {
    await this.taskModel.destroy({ where: { taskId: id } });
  }
}
