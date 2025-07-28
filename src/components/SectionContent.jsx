export default function SectionContent({ section }) {
  const RightComponent = section.component;

  return (
    <div className="w-full">
      <div >
        {RightComponent && <RightComponent />}
      </div>
    </div>
  );
}
