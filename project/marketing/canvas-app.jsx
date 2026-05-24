// Top-level canvas: organizes every piece into sections.

function App() {
  return (
    <DesignCanvas>
      <DCSection id="school-mkt" title="School · Marketing Pack" subtitle="Admissions flyer, daycare flyer, tri-fold brochure (outside + inside), social square (admissions + visit), social story, newspaper ad, roadside billboard.">
        <DCArtboard id="adm-flyer" label="A4 · Admissions flyer" width={794} height={1123}><AdmissionsFlyer/></DCArtboard>
        <DCArtboard id="day-flyer" label="A4 · Daycare flyer" width={794} height={1123}><DaycareFlyer/></DCArtboard>
        <DCArtboard id="brochure-out" label="Tri-fold · outside" width={1123} height={794}><BrochureOutside/></DCArtboard>
        <DCArtboard id="brochure-in" label="Tri-fold · inside" width={1123} height={794}><BrochureInside/></DCArtboard>
        <DCArtboard id="social-adm" label="Social 1:1 · Admissions" width={1080} height={1080}><SocialAdmissions/></DCArtboard>
        <DCArtboard id="social-visit" label="Social 1:1 · Visit" width={1080} height={1080}><SocialVisit/></DCArtboard>
        <DCArtboard id="story-daycare" label="Story 9:16 · Daycare" width={1080} height={1920}><SocialStory/></DCArtboard>
        <DCArtboard id="newspaper" label="Newspaper · quarter page" width={1240} height={880}><NewspaperAd/></DCArtboard>
        <DCArtboard id="billboard" label="Roadside billboard · 3:1" width={2400} height={800}><Billboard/></DCArtboard>
      </DCSection>

      <DCSection id="mother-mkt" title="Mother Training · Marketing Pack" subtitle="A4 cohort flyer, social square, tear-off WhatsApp wall poster, dedicated newspaper ad.">
        <DCArtboard id="mt-flyer" label="A4 · Cohort flyer" width={794} height={1123}><MotherFlyer/></DCArtboard>
        <DCArtboard id="mt-social" label="Social 1:1" width={1080} height={1080}><MotherSocial/></DCArtboard>
        <DCArtboard id="mt-tearoff" label="Wall poster · tear-off" width={794} height={1123}><TearOffPoster/></DCArtboard>
        <DCArtboard id="mt-news" label="Newspaper · half" width={1240} height={600}><MotherNewspaperAd/></DCArtboard>
      </DCSection>

      <DCSection id="mother-program" title="Mother Training · Program surfaces" subtitle="Web landing page, parent app enrollment flow (3 mobile screens), LMS cohort manager (desktop).">
        <DCArtboard id="mt-landing" label="Landing page · gooddayschool.pk/mother-training" width={1280} height={1800}><MotherLandingPage/></DCArtboard>
        <DCArtboard id="mt-enroll-1" label="Parent app · 1. Program intro" width={402} height={874}><EnrollScreen1/></DCArtboard>
        <DCArtboard id="mt-enroll-2" label="Parent app · 2. Application" width={402} height={874}><EnrollScreen2/></DCArtboard>
        <DCArtboard id="mt-enroll-3" label="Parent app · 3. Confirmation" width={402} height={874}><EnrollScreen3/></DCArtboard>
        <DCArtboard id="mt-lms" label="LMS · Cohort manager" width={1280} height={820}><CohortManager/></DCArtboard>
      </DCSection>

      <DCSection id="mother-print" title="Mother Training · Printables" subtitle="The workbook cover handed out at session one, and a sample weekly handout.">
        <DCArtboard id="mt-workbook" label="A4 · Workbook cover" width={794} height={1123}><WorkbookCover/></DCArtboard>
        <DCArtboard id="mt-handout" label="A4 · Week 4 handout" width={794} height={1123}><WeeklyHandout/></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
