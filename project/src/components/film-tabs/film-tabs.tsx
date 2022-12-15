/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState } from 'react';
import cn from 'classnames';
import { Film } from '../../types/film';
import OverviewTab from './overview-tab';
import DetailsTab from './details-tab';
import ReviewsTab from './reviews-tab';


type FilmTabsProps = {
  film: Film;
};


function FilmTabs({film}: FilmTabsProps): JSX.Element {
  console.log(film);

  const items = [
    {
      title: 'Overview',
      component: <OverviewTab film={film} />
    },
    {
      title: 'Details',
      component: <DetailsTab film={film} />
    },
    {
      title: 'Reviews',
      component: <ReviewsTab film={film}/>
    }
  ];

  const [activeTab, setActiveTab] = useState(items[0]);

  // const renderTab = () => {
  //   if (activeTab === items[0]) {
  //     console.log(1);
  //     return <OverviewTab film={film} />;
  //   }
  //   if (activeTab === items[1]) {
  //     return <DetailsTab film={film} />;
  //   }
  //   if (activeTab === items[2]) {
  //     return <ReviewsTab film={film}/>;
  //   }
  // };

  return (
    <Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {items.map((item, index) => {
            const keyValue = `${index}-${item.title}`;

            return (
              <li
                onClick={() => setActiveTab(() => items[index])}
                key={keyValue}
                className={cn(
                  'film-nav__item',
                  {'film-nav__item--active': activeTab.title === item.title}
                )}
              >
                <a href='false' className="film-nav__link" onClick={(evt) => evt.preventDefault()}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {activeTab && activeTab.component}
      {/* <OverviewTab film={film} /> */}

      {/* {renderTab()} */}

    </Fragment>
  );
}

export default FilmTabs;
