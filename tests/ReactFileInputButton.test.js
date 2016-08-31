/* globals sinon */
import chai, {expect} from 'chai';
import React from 'react'; // eslint-disable-line
import {mount} from 'enzyme';
import sinonChai from 'sinon-chai';
import ReactFileInputButton from '../src/ReactFileInputButton.js';

chai.use(sinonChai);

describe.only('ReactFileInputButton', () => {
	context('#render', () => {
		it('should render children', () => {
			let wrapper = mount(<ReactFileInputButton>foo</ReactFileInputButton>);

			expect(wrapper.text()).to.contain('foo');
		});

		it('should render hidden file input with given props', () => {
			let wrapper = mount(<ReactFileInputButton accept='image/*'>foo</ReactFileInputButton>);
			let fileInputs = wrapper.find('input[type="file"]');

			expect(fileInputs).to.have.length(1);
			expect(fileInputs.prop('accept')).to.equal('image/*');
		});
	});

	context('#handleClick', () => {
		it('should trigger file input click', () => {
			// let wrapper = mount(<ReactFileInputButton>foo</ReactFileInputButton>);
			// let fileInputWrapper = wrapper.ref('fileInput');
			// let fileInputClickSpy = sinon.spy(fileInputWrapper, 'onClick');

			// wrapper.find('div').first().simulate('click');
			//
			// expect(fileInputClickSpy).to.be.calledOnce;
		});
	});
});
