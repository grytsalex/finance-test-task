import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import { ShallowMock } from './utils/ShallowMock'
import { FinanceTable } from './components'

// const mockState = [ {
//   change: "127.14",
//   change_percent: "0.55",
//   dividend: "0.18",
//   exchange: "NASDAQ",
//   last_trade_time: "2021-11-16T18:16:13.000Z",
//   price: "289.32",
//   ticker: "AAPL",
//   yield: "1.85",
// },]

// jest.mock('react-redux', () => {
//   const ActualReactRedux = jest.requireActual('react-redux');
//   return {
//       ...ActualReactRedux,
//       useSelector: jest.fn().mockImplementation(() => {
//           return mockState;
//       }),
//   };
// });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



describe('Component: FooBar', () => {
  let mockStore = [ {
    change: "127.14",
    change_percent: "0.55",
    dividend: "0.18",
    exchange: "NASDAQ",
    last_trade_time: "2021-11-16T18:16:13.000Z",
    price: "289.32",
    ticker: "AAPL",
    yield: "1.85",
  },]

	it('should render FinanceTable component when store with tickers', () => {
		const component = shallow(
			ShallowMock(<FinanceTable />, mockStore)
		);
		expect(component).toBeTruthy();
	});

  it('should render Loader component when store is empty', () => {
    const component = shallow(
			ShallowMock(<App />, mockStore)
		);
    console.log(component)
    component.console.log()
		expect(component).toBeTruthy();
  })
});