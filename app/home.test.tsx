import { cleanup, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Home from './page';

const testPoemData = {
	data: [
		{
			id: 1,
			created_at: 'now',
			author: 1,
			text: "Adam\nHad 'em",
			title: 'Fleas',
		},
	],
	error: null,
};
const testAuthorData = {
	data: [
		{
			id: 1,
			name: 'Ogden Nash',
		},
	],
};

const { selectMock, fromMock } = vi.hoisted(() => ({
	selectMock: vi.fn(),
	fromMock: vi.fn(() => ({
		select: selectMock,
	})),
}));

vi.mock('@/utils/supabase/client', () => ({
	createClient: () => ({
		from: fromMock,
	}),
}));

describe('Poems home page with data', () => {
	beforeAll(async () => {
		selectMock.mockResolvedValue(testPoemData);
	});

	it('renders', async () => {
		render(await Home());
		const title = await screen.findByText(/fleas/i);
		expect(title).toBeInTheDocument();
	});
});
