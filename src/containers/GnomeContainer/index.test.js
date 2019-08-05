import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GnomeContainer from './index';
import { initGnomes, setGnomes, nextPage } from '../../redux/actions/gnomes';
import GnomeInformationComponent from '../../components/GnomeInformationComponent';
import GnomeSearchContainer from '../GnomeSearchContainer/index';
import * as mocks from '../../test/mocks';


configure({ adapter: new Adapter() });

describe('<GnomeContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GnomeContainer initGnomes={() => {}} />);
  });

  it('should render a <GnomeSearchContainer /> if />', () => {
    expect(wrapper.find(GnomeSearchContainer)).toHaveLength(1);
  });

  it('should render a <GnomeInformationComponent /> if gnomes are loaded', () => {
    wrapper.setProps({ brastlewark: mocks.brastlewark });
    expect(wrapper.find(GnomeInformationComponent)).toHaveLength(1);
  });
});
