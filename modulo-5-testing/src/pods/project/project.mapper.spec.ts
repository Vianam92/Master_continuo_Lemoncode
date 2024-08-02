import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
import * as apiModel from './api/project.api-model';

describe('Project Mapper', () => {
  it('should return project', () => {
    const empleado: apiModel.EmployeeSummary = {
      id: '125',
      isAssigned: true,
      employeeName: 'Maria',
    };

    const project: apiModel.Project = {
      id: '1',
      name: 'project 1',
      externalId: '285',
      comments: 'nuevo comentario',
      isActive: false,
      employees: [empleado],
    };

    const expectedProject ={
      ...project, employees: [...project.employees]
    }

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(project);
  });
  it('should return empty project when project is null', () => {
    const project: apiModel.Project = null;

    const expectedProject: viewModel.Project = viewModel.createEmptyProject(); 

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedProject);
  });
  it('should return empty project when project is undefined', () => {
    const project: apiModel.Project = undefined;

    const expectedProject: viewModel.Project = viewModel.createEmptyProject(); 

    const result = mapProjectFromApiToVm(project);

    expect(result).toEqual(expectedProject);
  });
});
