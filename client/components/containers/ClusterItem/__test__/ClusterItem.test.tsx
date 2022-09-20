import type { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { screen, fireEvent, customRender } from '@/test';
import { ClusterItem } from '..';

let user: UserEvent;
const mockItemProps = {
   title: 'mockItem',
   components: 'test',
   image: '',
   description: 'test item',
   link: '',
};

describe('ClusterItem (unit)', () => {
   // mount a cluster item
   beforeEach(() => {
      ({ user } = customRender(<ClusterItem {...mockItemProps} />));
   });

   test('ensure render', () => {
      expect(screen.getByRole('heading', { name: mockItemProps.title })).toBeInTheDocument();
   });

   test('hover applies .mouseOver', async () => {
      const item = document.querySelector('.container') as Element;

      expect(document.querySelector('.mouseOver')).not.toBeInTheDocument();

      // hover
      await user.hover(item);
      expect(document.querySelector('.mouseOver')).toBeInTheDocument();

      // end hover
      await user.unhover(item);
      expect(document.querySelector('.mouseOver')).not.toBeInTheDocument();
   });

   test('touch applies .mouseOver', () => {
      const item = document.querySelector('.container') as Element;

      expect(document.querySelector('.mouseOver')).not.toBeInTheDocument();

      // touch once
      fireEvent.touchStart(item);
      fireEvent.touchEnd(item);
      expect(document.querySelector('.mouseOver')).toBeInTheDocument();

      // touch a second time
      fireEvent.touchStart(item);
      fireEvent.touchEnd(item);
      expect(document.querySelector('.mouseOver')).not.toBeInTheDocument();
   });
});
