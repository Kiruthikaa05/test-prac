test('addition', () => {
    expect(10 + 10).toBe(20);
  });
  test('object test ', () => {
    const data = {one: 1,two:2};  
    expect(data).toEqual({one: 1, two: 2});
  });
  test('loop test',()=>{
      for(let a=1;a<5;a++){
        expect(a).not.toBe(0);
    }
  });
  test('zero test',()=>{
      const x=0;
      expect(x).not.toBeNull();
      expect(x).toBeDefined();
      expect(x).not.toBeUndefined();
      expect(x).not.toBeTruthy();
      expect(x).toBeFalsy();
  });
  test('equal test', () => {
    const res = 2 + 2;
    expect(res).toBeGreaterThan(3);
    expect(res).toBeGreaterThanOrEqual(3.5);
    expect(res).toBeLessThan(5);
    expect(res).toBeLessThanOrEqual(4.5);
    expect(res).toBe(4);
    expect(res).toEqual(4);
  });
  test(' floating test', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3); 
  });
  test('I am Kiruthikaa from madurai', () => {
    expect('from').not.toMatch(/am/);
  });
  