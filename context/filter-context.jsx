'use client';

const FiltersContext = createContext({
  assignees: [],
  setAssignees: () => {},
  search: '',
  setSearch: () => {},
  epics: [],
  setEpics: () => {},
  issueTypes: [],
  setIssueTypes: () => {},
  sprints: [],
  setSprints: () => {},
});

export const FiltersProvider = ({ children }) => {
  const [assignees, setAssignees] = useState([]);
  const [search, setSearch] = useState('');
  const [epics, setEpics] = useState([]);
  const [issueTypes, setIssueTypes] = useState([]);
  const [sprints, setSprints] = useState([]);

  return (
    <FiltersContext.Provider
      value={{
        assignees,
        setAssignees,
        search,
        setSearch,
        epics,
        setEpics,
        issueTypes,
        setIssueTypes,
        sprints,
        setSprints,
      }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);
