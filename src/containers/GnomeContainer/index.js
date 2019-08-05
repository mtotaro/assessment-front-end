import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { initGnomes, setGnomes, nextPage } from '../../redux/actions/gnomes';
import GnomeComponent from '../../components/GnomeComponent';
import { gnomeListSelector, pagesSelector } from '../../redux/selectors/gnomeList';
import GnomeSearchContainer from '../GnomeSearchContainer';

const ContainerDiv = styled.div`
  position: relative;
  z-index: 0;
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
  background-color:grey;
`;
const ContainerSearch = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 80px;
  background-color: white;
  box-shadow: 0 0 20px 10px rgba(50, 50, 50, 0.1);
  margin-top: -55px;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class GnomeContainer extends Component {
  state = {
    scrolling: false,
    perPage: 20,
    totalPages: 67,
  };

  componentDidMount() {
    this.props.initGnomes();
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => {
      this.handleScroll(e);
    });
  }

  handleScroll = (e) => {
    const { scrolling, totalPages } = this.state;
    const { pages } = this.props;
    if (scrolling) return;
    if (totalPages <= pages) return;
    const lastGnome = document.querySelector('.pagin:last-child');
    if (lastGnome) {
      const lastGnomeOffset = lastGnome.offsetTop + lastGnome.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 10;
      if (pageOffset > lastGnomeOffset - bottomOffset) {
        this.props.nextPage();
      }
    }
  };

  render() {
    const { gnomeList, pages } = this.props;


    if (gnomeList != null) {
      return (
        <div>
          <ContainerSearch>
            <GnomeSearchContainer />
          </ContainerSearch>
          <ContainerDiv>
            <GnomeComponent gnomeList={gnomeList} pages={pages} pagesShown={this.state.perPage} />
          </ContainerDiv>
        </div>
      );
    }
    return (
      <Loading>
        <ReactLoading type="spinningBubbles" delay={0} width={50} color="#FFAD5E" />
      </Loading>
    );
  }
}

GnomeContainer.propTypes = {
  perPage: PropTypes.number,
  gnomeList: PropTypes.arrayOf(PropTypes.object),
  pages: PropTypes.number,
};

// actions
const mapDispatchtoProps = {
  initGnomes,
  setGnomes,
  nextPage,
};
// selectors
const mapStateToProps = state => ({
  gnomeList: gnomeListSelector(state),
  pages: pagesSelector(state),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(GnomeContainer);
