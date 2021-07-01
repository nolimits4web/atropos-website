import { SectionTitle } from '../SectionTitle';

export const WhatsNext = () => {
  return (
    <>
      <SectionTitle title="What's next?" />
      <p>
        As you see it is easy to integrate Mariko into your website or app. So
        here are your next steps:
      </p>
      <ul>
        <li>
          If you have questions about Mariko ask them in{' '}
          <a href="https://stackoverflow.com" target="_blank">
            StackOverflow
          </a>{' '}
          or use{' '}
          <a
            href="https://github.com/nolimits4web/mariko/discussions"
            target="_blank"
          >
            GitHub Discussions
          </a>
        </li>
        <li>
          Create issue on{' '}
          <a
            href="https://github.com/nolimits4web/mariko/issues/new"
            target="_blank"
          >
            GitHub
          </a>{' '}
          if you found a bug.
        </li>
      </ul>
    </>
  );
};
