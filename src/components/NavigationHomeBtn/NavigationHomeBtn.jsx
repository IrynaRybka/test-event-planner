import { Icon } from 'components/Icon/Icon';

const NavigationHomeBtn = () => {
  return (
    <section>
      <button>
        Business
        <Icon id="icon-filters" width={24} height={24} />
      </button>
      <button>
        Sort by
        <Icon id="icon-filters-list" width={24} height={24} />
      </button>
      <button>
        <Icon id="icon-plus" width={24} height={24} />
        Add new event
      </button>
    </section>
  );
};
export default NavigationHomeBtn;
