import { Meta } from '../components/common/Meta';
import { TextLink } from '../components/atoms/link/TextLink';

const Page404 = () => {
  return (
    <>
      <Meta title='Page Not Found' description='ページが見つかりませんでした' />
      <main className='l-content'>
        <h1 className='c-heading01'>Page Not Found</h1>
        <div className='l-content__body'>
          <TextLink url='/' isBack={true}>
            TOPページに戻る
          </TextLink>
        </div>
      </main>
    </>
  );
};

export default Page404;
