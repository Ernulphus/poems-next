import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Poem from './page';

const testPoemData = {
	data: {
		id: 1,
		created_at: 'now',
		author: 1,
		text: "Adam\nHad 'em",
		title: 'Fleas',
	},
};

const { getPoemMock } = vi.hoisted(() => ({
	getPoemMock: vi.fn(),
}));

vi.mock('@/utils/supabase/poems', () => ({
	getPoem: getPoemMock,
}));

describe('Poem page', () => {
	it('renders a poem', async () => {
		getPoemMock.mockResolvedValue(testPoemData);

		// Pass params as a Promise
		const paramsPromise = Promise.resolve({ id: '1' });

		// Await the page function and render its JSX
		const jsx = await Poem({ params: paramsPromise });
		render(jsx);

		expect(await screen.findByText(/fleas/i)).toBeInTheDocument();
		expect(screen.getByText(/adam/i)).toBeInTheDocument();

		// Confirm database function was called with numeric ID
		expect(getPoemMock).toHaveBeenCalledWith(1);
	});
});
