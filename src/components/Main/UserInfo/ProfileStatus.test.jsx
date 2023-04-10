import React from "react";
import TestRenderer from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus Component', () => {
    test('status from props should be in the state', () => {
        const component = TestRenderer.create(<ProfileStatus status='it-camasutra.com' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-camasutra.com')
    });

    test('Span is exists', () => {
        const component = TestRenderer.create(<ProfileStatus status='123' />);
        const root = component.root;
        let span = root.findAllByType('span');
        expect(span).not.toBeNull()
    });

    test('Span contains the correct status', () => {
        const component = TestRenderer.create(<ProfileStatus status='123' />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('123')
    });

    test('After creation INPUT shouldnt be displayed', () => {
        const component = TestRenderer.create(<ProfileStatus status='123' />);
        const root = component.root;
        // let input = root.findByType('input');
        expect(() => {
            let input = root.findByType('input');
        }).toThrow()
    });
    test('input should be displayed in editMode instead of span', () => {
        const component = TestRenderer.create(<ProfileStatus status='123' />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('123');
    });
})