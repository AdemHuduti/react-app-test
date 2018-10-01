// Setting up Enzyme
// Using enzyme: STATIC, SHALLOW and FULL DOM
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });