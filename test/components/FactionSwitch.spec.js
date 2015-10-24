import { React, sinon, assert, expect, TestUtils } from '../test_exports';
import FactionSwitch from '../../src/js/components/FactionSwitch';
import * as MapActions from '../../src/js/actions/MapActions';
import { RADIANT } from '../../src/js/constants/MapConstants';

const props = {
  ontext: 'radiant',
  offtext: 'dire',
  faction: RADIANT,
  switchFaction: MapActions.switchFaction
}

describe('FactionSwitch component', () => {
  let sandbox, faction, container, elementsContainer, switchHalf, switchHandle;
  let findDOMWithClass = TestUtils.findRenderedDOMComponentWithClass;
  let scryDOMWithClass = TestUtils.scryRenderedDOMComponentsWithClass;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    faction = TestUtils.renderIntoDocument(<FactionSwitch {...props}/>);
    container = findDOMWithClass(faction, 'faction-switch');
    elementsContainer = findDOMWithClass(faction, 'faction-switch-elements');
    switchHalf = scryDOMWithClass(faction, 'switch-half');
    switchHandle = findDOMWithClass(faction, 'switch-handle');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render into the DOM', () => {
    expect(container).to.not.equal(null);
    expect(elementsContainer).to.not.equal(null);
    expect(switchHalf.length).to.equal(2);
    expect(switchHandle).to.not.equal(null);
  });

  /*
    React 0.14 freezes props so faction.props can no longer be stubbed directly.
    Test needs to be revamped.
  */
  it('should call switchFaction when clicked', () => {
    let switchActionStub = sandbox.stub(faction.props, "switchFaction");
    TestUtils.Simulate.click(container);
    expect(switchActionStub).to.have.been.called;
  });
});
