import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Login from "./Login";
import { userLogin } from "../../../../redux/features/user/UserServices";


const mockStore = configureMockStore();
const store = mockStore({
    admin: {
        token: "",
        loading: false,
        isAuthenticated: false,
        adminProfile: {},
        adminData: {},
        isOTP: false,
        isForgot: false,
        isReset: false,
    },
});

jest.mock('../../../../redux/features/user/UserServices', () => ({
    userLogin: jest.fn(),
}));

beforeEach(() => {
    userLogin.mockClear();
});

const renderWithProvider = (ui, { store = mockStore(), ...renderOptions } = {}) => {
    return render(<Provider store={store}>{ui}</Provider>, renderOptions);
};

test('renders page title and heading', (done) => {
    renderWithProvider(<Login />);
    // expect(screen.getByText(/login!/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome back! Log in to your account!/i)).toBeInTheDocument();
done()
});


