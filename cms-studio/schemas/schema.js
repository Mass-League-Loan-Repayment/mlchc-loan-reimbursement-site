// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import link from './link';
import linkGroup from './linkGroup';
import textLogo from './textLogo';
import navigation from './navigation';
import cta from './cta';
import textIcon from './textIcon';
import contentCoordinator, { breakType } from './contentCoordinator';
import socialMediaIcons from './socialMediaIcons';
import textIconGroup from './textIconGroup';
import mainContent from './mainContent';
import formControl from './formControl';
import form from './form';
import formControlOptions from './formControlOptions';
import footerTextLogo from './footerTextLogo';
import eligibilityStatus from './eligibilityStatus';
import images from './images';
import rules, { condition, rule } from './rules';
import fileDownload from './fileDownload';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    link,
    cta,
    textIcon,
    breakType,
    contentCoordinator,
    navigation,
    linkGroup,
    textLogo,
    footerTextLogo,
    textIconGroup,
    socialMediaIcons,
    fileDownload,
    mainContent,
    formControl,
    form,
    formControlOptions,
    eligibilityStatus,
    images,
    condition,
    rule,
    rules,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
