import React from 'react';
import { defaultStep, generateStep } from './__mocks__/generateStep';
import Step from './Step';
import { render, screen, fireEvent } from '@testing-library/react';

const onStepLinkClick = jest.fn();
const defaultStepProps = {
  onStepLinkClick,
  showSubSubSteps: false,
  completedText: 'Completed!',
  editText: 'Edit!',
  resumeText: 'Resume!',
  startText: 'Start!',
};

function renderStep(step = {}, props = {}) {
  step = generateStep(step);
  props = { ...defaultStepProps, ...props };
  return render(<Step step={step} {...props} />);
}

describe('Step', () => {
  beforeEach(() => {
    onStepLinkClick.mockClear();
  });

  it('applies correct default class', () => {
    renderStep();
    const li = screen.getByRole('listitem');
    expect(li).toHaveClass('ds-c-step');
    expect(li).not.toHaveClass('ds-c-step--current');
    expect(li).not.toHaveClass('ds-c-step--completed');
  });

  it('applies correct started classes', () => {
    renderStep({ started: true });
    const li = screen.getByRole('listitem');
    expect(li).toHaveClass('ds-c-step');
    expect(li).toHaveClass('ds-c-step--current');
    expect(li).not.toHaveClass('ds-c-step--completed');
  });

  it('applies correct isNextStep classes', () => {
    renderStep({ isNextStep: true });
    const li = screen.getByRole('listitem');
    expect(li).toHaveClass('ds-c-step');
    expect(li).toHaveClass('ds-c-step--current');
    expect(li).not.toHaveClass('ds-c-step--completed');
  });

  it('applies correct completed classes', () => {
    renderStep({ completed: true });
    const li = screen.getByRole('listitem');
    expect(li).toHaveClass('ds-c-step');
    expect(li).not.toHaveClass('ds-c-step--current');
    expect(li).toHaveClass('ds-c-step--completed');
  });

  it('renders basic incomplete, unstarted step', () => {
    renderStep();

    const title = screen.getByText('Do something!');
    expect(title).toHaveClass('ds-c-step__heading');

    const description = screen.getByText(/Do something really cool!/i);
    expect(description).toHaveClass('ds-c-step__description');

    const regions = screen.queryAllByRole('region');

    regions.forEach((r) => {
      expect(r).not.toHaveClass('ds-c-step__completed-text');
      expect(r).not.toHaveClass('ds-c-step__substeps');
    });
  });

  it('renders completed text and an edit link for completed steps', () => {
    renderStep({ completed: true });

    const steps = screen.getByRole('listitem');
    expect(steps).toMatchSnapshot();

    const editLink = screen.getByRole('link');
    expect(editLink).toHaveTextContent('Edit!');
    expect(editLink).toHaveAttribute('href', defaultStep.href);

    fireEvent.click(editLink);
    expect(onStepLinkClick).toHaveBeenCalled();
  });

  it('renders completed text and an no edit link for completed steps with substeps', () => {
    renderStep({
      completed: true,
      steps: [generateStep({ id: '1' })],
    });

    const completed = screen.getByText(/Completed!/i);
    expect(completed).toBeInTheDocument();

    const editLink = screen.queryByRole('link');
    expect(editLink).not.toBeInTheDocument();
  });

  it('renders resume button for started, incomplete steps', () => {
    renderStep({ started: true });

    const editLink = screen.getByRole('link');
    expect(editLink).toHaveTextContent('Resume!');
    fireEvent.click(editLink);
    expect(onStepLinkClick).toHaveBeenCalled();
  });

  it('renders start button for steps with isNextStep', () => {
    renderStep({ isNextStep: true });

    const editLink = screen.getByRole('link');
    expect(editLink).toHaveTextContent('Start!');
    fireEvent.click(editLink);
    expect(onStepLinkClick).toHaveBeenCalled();
  });

  it('renders alternative linkText', () => {
    const linkText = 'Hello';
    renderStep({ linkText, started: true });
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('uses step.onClick handler when provided', () => {
    const onClick = jest.fn();
    renderStep({ onClick, isNextStep: true }, { onClick });

    const editLink = screen.getByRole('link');
    expect(editLink).toHaveTextContent('Start!');
    fireEvent.click(editLink);
    expect(onClick).toHaveBeenCalled();
    expect(onStepLinkClick).not.toHaveBeenCalled();
  });

  it('renders substeps', () => {
    const steps = [
      generateStep({ id: '1', heading: 'substep' }),
      generateStep({ id: '2', heading: 'substep' }),
      generateStep({ id: 'c', heading: 'substep' }),
    ];
    renderStep({ steps });

    const list = screen.getByRole('list');
    const listItems = screen.getAllByText(/substep/i);
    expect(listItems.length).toEqual(3);
    listItems.forEach((li) => {
      expect(li).toHaveClass('ds-c-substep__heading');
    });

    expect(list).toMatchSnapshot();
  });
});
