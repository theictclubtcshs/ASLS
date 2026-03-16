// ============================================
// ASLS STUDENT DATABASE
// ============================================

const STUDENTS_DATA = [
    // Format: { lrn: '12-digit', name: 'FULL NAME', sex: 'M/F', grade: 'GRADE', section: 'SECTION' }
    
    { lrn: '104406130081', name: 'JUAN DELA CRUZ', sex: 'M', grade: '10', section: 'MAGALANG' },
    { lrn: '400558150041', name: 'MARIA SANTOS', sex: 'F', grade: '10', section: 'MAGALANG' },
    { lrn: '123456789012', name: 'PEDRO PENDUKO', sex: 'M', grade: '11', section: 'MASIKAP' },
    { lrn: '987654321098', name: 'ANA MAE TAN', sex: 'F', grade: '11', section: 'MASIKAP' },
    { lrn: '112233445566', name: 'JOSE RIZAL', sex: 'M', grade: '12', section: 'MATAAS' },
    { lrn: '554433221100', name: 'GABRIELA SILANG', sex: 'F', grade: '12', section: 'MATAAS' },
    { lrn: '998877665544', name: 'ANDRES BONIFACIO', sex: 'M', grade: '10', section: 'MAGALANG' },
    { lrn: '887766554433', name: 'MELCHORA AQUINO', sex: 'F', grade: '10', section: 'MAGALANG' },
    { lrn: '776655443322', name: 'EMILIO AGUINALDO', sex: 'M', grade: '11', section: 'MASIKAP' },
    { lrn: '665544332211', name: 'GREGORIA DE JESUS', sex: 'F', grade: '11', section: 'MASIKAP' },
    { lrn: '554433221100', name: 'APOLINARIO MABINI', sex: 'M', grade: '12', section: 'MATAAS' },
    { lrn: '443322110099', name: 'JULIANA TECSON', sex: 'F', grade: '12', section: 'MATAAS' },
    
    // Add ALL your students here - up to 10,000 students!
    // Use Excel formula: ="{ lrn: '"&A2&"', name: '"&B2&"', sex: '"&C2&"', grade: '"&D2&"', section: '"&E2&"' },"
];

// Create fast lookup map (DO NOT MODIFY - this optimizes performance)
const studentMap = new Map();
STUDENTS_DATA.forEach(s => studentMap.set(s.lrn, s));

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STUDENTS_DATA, studentMap };
}
